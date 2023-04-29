-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "partNumber" TEXT NOT NULL,
    "sapCode" TEXT NOT NULL,
    "projectNumber" TEXT NOT NULL,
    "amount" INTEGER NOT NULL
);
INSERT INTO "new_Product" ("amount", "description", "id", "partNumber", "projectNumber", "sapCode") SELECT "amount", "description", "id", "partNumber", "projectNumber", "sapCode" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE UNIQUE INDEX "Product_partNumber_key" ON "Product"("partNumber");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
