// Milestone 4
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)



const app = new Vue({
    el: '#root',
    data: {
        contacts: [{
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alex',
                avatar: '_4',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Matteo',
                avatar: '_5',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Domani sushi?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ci sta!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Anastasia',
                avatar: '_6',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Stasera mangi a casa?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Yes, arrivo per le 8',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'A dopo allora',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_7',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Riesci a prendere qualcosa per stasera?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, dopo passo dal supermercato',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Ale',
                avatar: '_8',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Stasera film?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Vai',
                        status: 'received'
                    }
                ],
            }
            
        ],
        activeContact: 0,
        mexValue: '',
        messageId: null,
        search: '',
        date: null,
        lastAccess: dayjs().format('HH:mm'),
        showDropdown: null
    },
    methods: {
        selectedChat: function(index) {
            this.activeContact = index;
        },
        addMessage: function() {
            this.date = dayjs().format('DD/MM/YYYY HH:mm:ss');
            console.log(this.mexValue);
            if(this.mexValue != '') {
                this.contacts[this.activeContact].messages.push(
                    {   message:this.mexValue,
                        status: 'sent',
                        date: this.date
                    });
                this.mexValue = '';
            }
        },
        iaMessage: function() {
            this.date = dayjs().format('DD/MM/YYYY HH:mm:ss');
            this.contacts[this.activeContact].messages.push(
                {   message:'okay',
                    status: 'received',
                    date: this.date
                });
        },
        replyMessage: function () {
            this.messageId = setTimeout(() => {
				this.iaMessage();
			}, 1000);
        },
        searchContacts : function(index){
            return this.contacts[index].name.toLowerCase().includes(this.search.toLowerCase())
        },
        lastMsg: function(index) {
            return this.contacts[index].messages.slice(-1)[0].message;
        },
        lastDate: function(index) {
            let date = this.contacts[index].messages.slice(-1)[0].date;
            date =  date.split(' ')[0];
            return date;    
        },
        toggleDropdown: function(index) {
            if(this.contacts[index].visible == true) {
                this.contacts[index].visible = false;
            } else {
                this.contacts[index].visible = true;
            }
        },
        deleteMsg: function(index) {
            this.contacts[this.activeContact].messages.splice(index,1);
        }
    },
});