/* 
    Ricreiamo un feed social aggiungendo al layout di base fornito (allegato sotto) il nostro codice javascript in cui:

    -1- Creiamo il nostro array di 5 oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine, numero di likes.
    Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es: https://picsum.photos/id/237/600/350

    -2- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
    Inserire a inizio del file JavaScript una sezione di commento dove scrivere gli step richiesti di logica in italiano, per aiutarvi a ragionare prima della stesura del codice.
 */
    
//-1- array 5 objects
const feedSocial = [
    // 1
        {
            nameAuthor : 'Phil Mangione',
            profilePic : 'https://picsum.photos/id/237/300/300',
            image : 'https://picsum.photos/id/238/600/350',
            date : '4 mesi fa',
            textPost : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
            likes : 40,

        },
    // 2
        {
            nameAuthor : 'Federico Trimarco',
            profilePic : 'https://picsum.photos/id/238/300/300',
            image : 'https://picsum.photos/id/239/600/350',
            date : '5 mesi fa',
            textPost : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias. bla bla bla',
            likes : 80,

        },
    // 3
        {
            nameAuthor : 'Francesco Salvati',
            profilePic : 'https://picsum.photos/id/239/300/300',
            image : 'https://picsum.photos/id/240/600/350',
            date : '7 mesi fa',
            textPost : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias. bla bla bla bla bla bla bla',
            likes : 120,

        },
    // 4
        {
            nameAuthor : 'Giulia Ascione',
            profilePic : 'https://picsum.photos/id/240/300/300',
            image : 'https://picsum.photos/id/241/600/350',
            date : '2 mesi fa',
            textPost : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias. bla bla',
            likes : 20,

        },
    // 5
        {
            nameAuthor : 'Fabrizia Abet',
            profilePic : 'https://picsum.photos/id/250/300/300',
            image : 'https://picsum.photos/id/242/600/350',
            date : '11 mesi fa',
            textPost : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias. bla bla bla bla bla bla bla bla bla bla',
            likes : 60,

        },

];

// reference container
const containerPostList = document.querySelector('.posts-list');

//-2- generate cards post
genFeed(feedSocial, containerPostList);