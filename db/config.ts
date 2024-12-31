import { defineDb, defineTable, column } from 'astro:db';

const Conti = defineTable({
  columns: {
    name: column.text(),
    balance: column.text(),
    iban: column.text(),
    spent: column.text(),
  }
})

const Carte = defineTable({
  columns: {
    name: column.text(),
    balance: column.text(),
    spent: column.text(),
    code: column.text(),
  }
})

const Admins = defineTable({
  columns: {
    username: column.text(),
    password: column.text(),
  }
})


export default defineDb({
  tables: { Conti, Carte, Admins },
})