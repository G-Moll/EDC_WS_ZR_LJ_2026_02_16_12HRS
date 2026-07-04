const { mysqlTable, int, varchar, timestamp } = require( "drizzle-orm/mysql-core" );

const Categories = mysqlTable( "Categories", {
    id: int( "id", { unsigned: true } ).primaryKey().autoincrement(),
    name: varchar( "name", { length: 100 } ).notNull(),

    created_at: timestamp( "created_at" ).defaultNow().notNull(),
    updated_at: timestamp( "updated_at" ).defaultNow().onUpdateNow().notNull()
} );

module.exports = { Categories };
