import { db, Conti, Carte, Admins, Comment} from 'astro:db';

export default async function() {

  await db.insert(Conti).values([
    { name: 'Luca Bianchi', balance: "25", iban: 'IT60X0542811101000000123457', spent: '20' },
    { name: 'Francesca Rossi', balance: "30", iban: 'IT60X0542811101000000123458', spent: '30' },
    { name: 'Marco Esposito', balance: "40", iban: 'IT60X0542811101000000123459', spent: '40' },
    { name: 'Giovanni Ferrari', balance: "50", iban: 'IT60X0542811101000000123460', spent: '50' },
    { name: 'Alessandro Bianchi', balance: "60", iban: 'IT60X0542811101000000123461', spent: '60' },
    { name: 'Sara Esposito', balance: "70", iban: 'IT60X0542811101000000123462', spent: '10' },
    { name: 'Giuseppe Verdi', balance: "80", iban: 'IT60X0542811101000000123463', spent: '50' },
    { name: 'Mario Rossi', balance: "90", iban: 'IT60X0542811101000000123464', spent: '50' },
    { name: 'Lorenzo Bianchi', balance: "100", iban: 'IT60X0542811101000000123465', spent: '60' },
    { name: 'Francesco Ferrari', balance: "110", iban: 'IT60X0542811101000000123466', spent: '70' },
    { name: 'Andrea Esposito', balance: "120", iban: 'IT60X0542811101000000123467', spent: '80' },
    { name: 'Giovanna Bianchi', balance: "130", iban: 'IT60X0542811101000000123468', spent: '90' },
    { name: 'Riccardo Rossi', balance: "140", iban: 'IT60X0542811101000000123469', spent: '100' },
    { name: 'Elisabetta Ferrari', balance: "150", iban: 'IT60X0542811101000000123470', spent: '110' },
  ])
  
  await db.insert(Carte).values([
    { name: 'Luca Bianchi', balance: "35", code: '4532 1143 8765 3211', spent: '20' },
    { name: 'Francesca Rossi', balance: "45", code: '4111 8765 4321 0988', spent: '30' },
    { name: 'Marco Esposito', balance: "55", code: '4234 5214 6832 3576', spent: '40' },
    { name: 'Giovanni Ferrari', balance: "65", code: '4532 1143 8765 3212', spent: '50' },
    { name: 'Alessandro Bianchi', balance: "75", code: '4111 8765 4321 0989', spent: '60' },
    { name: 'Sara Esposito', balance: "600", code: '4234 5214 6832 3577', spent: '10' },
    { name: 'Giuseppe Verdi', balance: "25", code: '4532 1143 8765 3213', spent: '50' },
    { name: 'Mario Rossi', balance: "35", code: '4111 8765 4321 0990', spent: '50' },
    { name: 'Lorenzo Bianchi', balance: "85", code: '4532 1143 8765 3214', spent: '60' },
    { name: 'Francesco Ferrari', balance: "95", code: '4111 8765 4321 0991', spent: '70' },
    { name: 'Andrea Esposito', balance: "105", code: '4234 5214 6832 3578', spent: '80' },
  ])


  await db.insert(Admins).values([
    { username: 'admin', password: 'admin' },
    { username: 'superadmin', password: 'superadmin' },
    { username: 'moderator', password: 'moderator' },
  ])
}
