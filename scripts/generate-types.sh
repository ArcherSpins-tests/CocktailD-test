API_URL="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito"
OUT_FILE="src/types/cocktail.d.ts"

curl -s "$API_URL" | npx quicktype --lang typescript --just-types -o $OUT_FILE
echo "✅ Types generated at $OUT_FILE"