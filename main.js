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



/***************************
 F U N Z I O N I
 ***************************/ 

// function generate cards post

function genFeed(feedSocial, containerPostList){
    for(let i = 0; i < feedSocial.length; i++){
        const socialFeed = feedSocial[i];
        containerPostList.innerHTML += `
            <div class="post">
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            <img class="profile-pic" src="${socialFeed.profilePic}" alt="${socialFeed.nameAuthor}">                    
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${socialFeed.nameAuthor}</div>
                            <div class="post-meta__time">${socialFeed.date}</div>
                        </div>                    
                    </div>
                </div>
                <div class="post__text">${socialFeed.textPost}</div>
                <div class="post__image">
                    <img src="${socialFeed.image}" alt="">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button  js-like-button" href="#" data-postid="1">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-1" class="js-likes-counter">${socialFeed.likes}</b> persone
                        </div>
                    </div> 
                </div>            
            </div>`
    };

};