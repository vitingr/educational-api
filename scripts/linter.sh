#!/bin/bash

set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${YELLOW}🔍 Iniciando análise de qualidade do código para API Fastify (TypeScript)...${NC}"

echo -e "\n${YELLOW}🚨 Rodando ESLint...${NC}"
npx eslint . --ext .ts || {
  echo -e "${RED}❌ ESLint encontrou erros.${NC}"
  exit 1
}

echo -e "\n${YELLOW}📦 Verificando tipos com TypeScript...${NC}"
npx tsc --noEmit || {
  echo -e "${RED}❌ Problemas de tipagem encontrados.${NC}"
  exit 1
}

echo -e "\n${YELLOW}🧹 Verificando formatação com Prettier...${NC}"
npx prettier --check . || {
  echo -e "${RED}❌ Arquivos fora do padrão Prettier.${NC}"
  exit 1
}

echo -e "\n${YELLOW}🚫 Procurando 'console.log', 'debugger' e afins...${NC}"
PROHIBITED=$(grep -rnE 'console\.log|debugger' ./src || true)
if [ -n "$PROHIBITED" ]; then
  echo -e "${RED}❌ Encontrado uso proibido:${NC}"
  echo "$PROHIBITED"
  exit 1
else
  echo -e "${GREEN}✅ Nenhum uso proibido encontrado.${NC}"
fi

echo -e "\n${YELLOW}🔐 Verificando .env...${NC}"
if git ls-files --error-unmatch .env > /dev/null 2>&1; then
  echo -e "${RED}❌ Arquivo .env está comitado!${NC}"
  exit 1
else
  echo -e "${GREEN}✅ .env não está no repositório.${NC}"
fi

echo -e "\n${YELLOW}🧪 Verificando código TypeScript não utilizado com ts-prune...${NC}"
npx ts-prune > ts-prune-report.txt
if [ -s ts-prune-report.txt ]; then
  echo -e "${RED}⚠️ Código potencialmente não utilizado:${NC}"
  cat ts-prune-report.txt
else
  echo -e "${GREEN}✅ Nenhuma referência morta encontrada.${NC}"
fi

echo -e "\n${YELLOW}📦 Verificando dependências não utilizadas com depcheck...${NC}"
npx depcheck --ignore-dirs=dist,build || {
  echo -e "${RED}⚠️ Verifique as dependências listadas acima.${NC}"
}

echo -e "\n${YELLOW}🔍 Verificando versionamento no package.json...${NC}"
BAD_VERSIONS=$(jq -r '.dependencies + .devDependencies | to_entries[] | select(.value | test("^[^\\^~]")) | "\(.key): \(.value)"' package.json)
if [ -n "$BAD_VERSIONS" ]; then
  echo -e "${RED}⚠️ Dependências com versões fixas encontradas (sem ^ ou ~):${NC}"
  echo "$BAD_VERSIONS"
else
  echo -e "${GREEN}✅ Todas as dependências usam versionamento flexível (sem travamento total).${NC}"
fi

echo -e "\n${GREEN}✅ Lint finalizado com sucesso.${NC}"
