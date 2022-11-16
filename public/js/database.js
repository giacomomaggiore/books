//MAX LEN citazione
//Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, repellat inventore necessitatibu

const libri = [
    {
        titolo: "California",
        citazione: "Insomma, vorremmo essere un po' più come la California, che infatti da secoli è considerata la «fine del mondo»",
        src: "https://m.media-amazon.com/images/I/71jll4IJAmL.jpg",
        link: "https://www.amazon.it/California-Francesco-Costa/dp/8804755210/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3VXSC7PW0ZB64&keywords=california+costa&qid=1666554573&qu=eyJxc2MiOiIwLjEyIiwicXNhIjoiMC4wNiIsInFzcCI6IjAuMTAifQ%3D%3D&sprefix=california+cost%2Caps%2C193&sr=8-1",
    },
    {
        titolo: "What I learned losing a million dollars",
        citazione: "You don't know why the market is going up or down, you just want to know what is doing",
        src: "https://m.media-amazon.com/images/I/51fGOyjVMlL.jpg",
        link: "https://www.amazon.it/What-Learned-Losing-Million-Dollars/dp/0231164688/ref=sr_1_1?keywords=what+i+learned+losing+a+million+dollars&qid=1666554557&qu=eyJxc2MiOiIwLjQ4IiwicXNhIjoiMC4xMSIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=what+i+learn%2Caps%2C217&sr=8-1",
    },
    {
        titolo: "Antifragile",
        citazione: "E' fragile ciò che subisce perdite nell'incertezza. E' antifragile tutto il contrario.",
        src: "https://m.media-amazon.com/images/I/71ly-xl-lnL.jpg",
        link: "https://www.amazon.it/Antifragile-Prosperare-disordine-Nassim-Nicholas/dp/8842819174/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1QVIMKQL0KLRP&keywords=antifragile&qid=1666554598&qu=eyJxc2MiOiIxLjA1IiwicXNhIjoiMC44MyIsInFzcCI6IjAuOTkifQ%3D%3D&sprefix=antifragile%2Caps%2C192&sr=8-1",
    },
    {
        titolo: "L'Arte dell'hacking",
        citazione: "Dal mio punto di vista, l'hacking è una pratica creativa come l'arte.",
        src: "https://www.ibs.it/images/9788807883606_0_424_0_75.jpg",
        link: "https://www.amazon.it/Larte-dellhacking-Kevin-D-Mitnick/dp/8807883600/ref=sr_1_2?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2QEEYB59UIJYM&keywords=l%27arte+dell%27hacking&qid=1666554610&qu=eyJxc2MiOiIxLjc5IiwicXNhIjoiMS44NiIsInFzcCI6IjEuNjEifQ%3D%3D&sprefix=l+arte+dell+hacking%2Caps%2C187&sr=8-2",
    },
    {
        titolo: "Ovunque",
        citazione: "Quando viaggio da solo mi passa la voglia di cambiarmi, tanto a chi posso dar fastidio?",
        src: "https://m.media-amazon.com/images/I/51xdROB0qnL.jpg",
        link: "https://www.amazon.it/Ovunque-Nicol%C3%B2-Balini/dp/8820073072/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=XQMLE4BQPBCJ&keywords=ovunque&qid=1666554620&qu=eyJxc2MiOiIxLjE1IiwicXNhIjoiMC44NyIsInFzcCI6IjEuMzIifQ%3D%3D&sprefix=ovunqu%2Caps%2C190&sr=8-1",
    },
    {
        titolo: "La Traiettoria",
        citazione: "Vengo da una famiglia dove seguire le regole è un imperativo. Per capire chi ero ho dovuto infrangerle",
        src: "https://www.ibs.it/images/9788804749080_0_536_0_75.jpg",
        link: "https://www.amazon.it/traiettoria-Alessandro-Benetton/dp/8804749083/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=364VA79PM5XO9&keywords=la+traiettoria&qid=1666554636&qu=eyJxc2MiOiIwLjE5IiwicXNhIjoiMC4xMSIsInFzcCI6IjAuMjMifQ%3D%3D&sprefix=la+traiettori%2Caps%2C179&sr=8-1",
    },
    {
        titolo: "Giocati dal Caso",
        citazione: "Nessuno accetta il caso come causa del proprio successo, ma solo del proprio fallimento.",
        src: "https://kbimages1-a.akamaihd.net/07db90c8-5875-48b7-86a0-7d73423973a5/1200/1200/False/giocati-dal-caso-1.jpg",
        link: "https://www.amazon.it/Giocati-caso-ruolo-fortuna-finanza/dp/8842820237/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2C07373FYB580&keywords=giocati+dal+caso&qid=1666554645&qu=eyJxc2MiOiIwLjcwIiwicXNhIjoiMC41MiIsInFzcCI6IjAuMzUifQ%3D%3D&sprefix=giocati+dal+cas%2Caps%2C171&sr=8-1",
    },
    {
        titolo: "Steve Jobs non abita qui",
        citazione: "Airbnb non è proprio come McDonald's, ma come un avocato toast sostenibile e facilmente replicabile.",
        src: "https://www.adelphi.it/spool/cover__id8866_w600_t1594807353.jpg&.jpg",
        link: "https://www.amazon.it/Steve-Jobs-non-abita-pi%C3%B9/dp/8845934640/ref=sr_1_1?keywords=steve+jobs+non+abita+pi%C3%B9+qui&qid=1666554659&qu=eyJxc2MiOiIwLjM5IiwicXNhIjoiMC4yMyIsInFzcCI6IjAuMjEifQ%3D%3D&sprefix=steve+j%2Caps%2C178&sr=8-1",
    },
    {
        titolo: "La vera storia del genio che ha fondato McDonald",
        citazione: "Credo in Dio, nella famiglia e in McDonald’s - in ufficio, però, l’ordine va invertito.",
        src: "https://m.media-amazon.com/images/I/41PADEM8WzL.jpg",
        link: "https://www.amazon.it/vera-storia-genio-fondato-McDonalds%C2%AE/dp/B07D4ZPJL9/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1UM8TB4N0M2FL&keywords=la+vera+storia+del+genio&qid=1666554671&qu=eyJxc2MiOiIwLjc4IiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=la+vera+storia+del+genio%2Caps%2C191&sr=8-1",
    },
    {
        titolo: "La Sostanza Instabile",
        citazione: "“Qualcosa è esploso”. Loro sono i terroristi, quasi sicuramente islamici. ",
        src: "https://www.giulioperroneditore.com/wp-content/uploads/2021/06/copertina_lombezzi_min.jpg",
        link: "https://www.amazon.it/sostanza-instabile-Giulia-Lombezzi/dp/8860045703/ref=sr_1_1?keywords=la+sostanza+instabile&qid=1666554682&qu=eyJxc2MiOiIwLjAwIiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=la+sostanza+ins%2Caps%2C201&sr=8-1",
    },
    {
        titolo: "Helgoland",
        citazione: "La teoria dei quanti è la migliore descrizione della natura di cui disponiamo oggi.",
        src: "https://m.media-amazon.com/images/I/617aCsvbXJL.jpg",
        link: "https://www.amazon.it/Helgoland-Carlo-Rovelli/dp/8845935051/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=BWGZ49K45D8E&keywords=helgoland&qid=1666554692&qu=eyJxc2MiOiIwLjkzIiwicXNhIjoiMC40NCIsInFzcCI6IjAuNDEifQ%3D%3D&sprefix=halgola%2Caps%2C224&sr=8-1",
    },
    {
        titolo: "Una Terra Promessa",
        citazione: "Ero diventato un politico. E nemmeno troppo bravo.",
        src: "https://m.media-amazon.com/images/I/71W0kAoWW4L.jpg",
        link: "https://www.amazon.it/Una-terra-promessa-Barack-Obama/dp/8811149878/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2VVVS5PA89EES&keywords=una+terra+promessa&qid=1666554702&qu=eyJxc2MiOiIxLjkwIiwicXNhIjoiMS42NCIsInFzcCI6IjAuNTcifQ%3D%3D&sprefix=una+terra+promess%2Caps%2C237&sr=8-1",
    },
    {
        titolo: "Corro perchè mia madre mi picchia",
        citazione: "La corsa è inutile, e proprio per questo va coltivata. Come un'arte.",
        src: "https://www.oscarmondadori.it/content/uploads/2017/08/978880464855HIG.JPG",
        link: "https://www.amazon.it/Una-terra-promessa-Barack-Obama/dp/8811149878/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2VVVS5PA89EES&keywords=una+terra+promessa&qid=1666554702&qu=eyJxc2MiOiIxLjkwIiwicXNhIjoiMS42NCIsInFzcCI6IjAuNTcifQ%3D%3D&sprefix=una+terra+promess%2Caps%2C237&sr=8-1",
    },
    {
        titolo: "Una notte ho sognato New York",
        citazione: "Bastano cinque minuti per sentirti parte di New York, ma una vita intera per capirla fino in fondo",
        src: "https://m.media-amazon.com/images/I/61vKCnaTK8L.jpg",
        link: "https://www.amazon.it/Una-notte-sognato-New-York/dp/8804724994/ref=sr_1_1?keywords=una+notte+ho+sognato+new+york&qid=1666554723&qu=eyJxc2MiOiIxLjA1IiwicXNhIjoiMC43MyIsInFzcCI6IjAuNzUifQ%3D%3D&sprefix=una+notte+h%2Caps%2C202&sr=8-1",
    },
    {
        titolo: "I Principi del Successo",
        citazione: "Confidate nella verità a tutti i costi e nella trasparenza estrema",
        src: "https://m.media-amazon.com/images/I/71LyvaUH80L.jpg",
        link: "https://www.amazon.it/principi-del-successo-Ray-Dalio/dp/8820385716/ref=sr_1_1?keywords=i+principi+del+successo+ray+dalio&qid=1666554733&qu=eyJxc2MiOiIxLjI4IiwicXNhIjoiMC44MSIsInFzcCI6IjAuOTEifQ%3D%3D&sprefix=i+principi+del+%2Caps%2C208&sr=8-1",
    },
    {
        titolo: "Il Cigno Nero",
        citazione: "Perchè ci ostiniamo a pianificare il futuro quando le nostre vite vengono modificate dall'ignoto?",
        src: "https://m.media-amazon.com/images/I/61rsVxQlXIL.jpg",
        link: "https://www.amazon.it/cigno-nero-limprobabile-governa-nostra/dp/884282027X/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2HWYIG0PARQ2W&keywords=il+cigno+nero&qid=1666554745&qu=eyJxc2MiOiIwLjc5IiwicXNhIjoiMC40MiIsInFzcCI6IjAuNTAifQ%3D%3D&sprefix=il+cigno+ne%2Caps%2C177&sr=8-1",
    },
    {
        titolo: "La mucca viola",
        citazione: "O sei una mucca viola o non sei nessuno. O sei straordinario o non esisti.",
        src: "https://m.media-amazon.com/images/I/718OGpfUOMS.jpg",
        link: "https://www.amazon.it/mucca-viola-notare-fortuna-marrone/dp/8836200559/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1QD6TIK1V14XD&keywords=la+mucca+viola&qid=1666554757&qu=eyJxc2MiOiIxLjExIiwicXNhIjoiMC40MyIsInFzcCI6IjAuMzUifQ%3D%3D&sprefix=la+mucca+viol%2Caps%2C154&sr=8-1",
    },
    {
        titolo: "La montagna dentro",
        citazione: "Appendo l'amaca. Sotto di me il vuoto, sopra di me le stelle.",
        src: "https://www.ibs.it/images/9788858130117_0_536_0_75.jpg",
        link: "https://www.amazon.it/montagna-dentro-Herv%C3%A9-Barmasse/dp/8858130111/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=OGPON7MJPART&keywords=la+montagna+dentro&qid=1666554768&qu=eyJxc2MiOiIxLjE4IiwicXNhIjoiMC42MiIsInFzcCI6IjAuNTYifQ%3D%3D&sprefix=la+montagna+dent%2Caps%2C160&sr=8-1",
    },
    {
        titolo: "Allegro Occidentale",
        citazione: "....E scoprì che i cinesi vedono gli occidentali tutti allo stesso modo.",
        src: "https://m.media-amazon.com/images/I/61H+Jg0kL+L.jpg",
        link: "https://www.amazon.it/Allegro-occidentale-Francesco-Piccolo/dp/8806227599/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2W7YH4X10OS88&keywords=allegro+occidentale&qid=1666554781&qu=eyJxc2MiOiIwLjAwIiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=allegro+occidental%2Caps%2C176&sr=8-1il ",
    },
    {
        titolo: "Il metodo Warren Buffet",
        citazione: "Ciò che mi preoccupa di più è la mcnanza di fiducia negli investimenti a lungo termine.",
        src: "https://m.media-amazon.com/images/I/51q-meCl8VL.jpg",
        link: "https://www.amazon.it/metodo-Warren-Buffett-segreti-investitore/dp/8820362716/ref=sr_1_1?keywords=il+metodo+warren+buffett&qid=1666554796&qu=eyJxc2MiOiIxLjQ0IiwicXNhIjoiMC44NyIsInFzcCI6IjAuNjgifQ%3D%3D&sprefix=il+metodo+w%2Caps%2C160&sr=8-1",
    },
    {
        titolo: "Lo zen e l'arte di manutenzione della motocicletta",
        citazione: "Vivere soltanto in funzione di una meta futura è sciocco. È sui fianchi delle montagne, e non sulla cima, che si sviluppa la vita",
        src: "https://m.media-amazon.com/images/I/41q9GMGWmeL.jpg",
        link: "https://www.amazon.it/zen-larte-della-manutenzione-motocicletta/dp/8845907341/ref=sr_1_1?keywords=lo+zen+e+l+arte+della+manutenzione+della+motocicletta&qid=1666554806&qu=eyJxc2MiOiIwLjg0IiwicXNhIjoiMC4zNyIsInFzcCI6IjAuNDQifQ%3D%3D&sprefix=lo+zen+e%2Caps%2C141&sr=8-1",
    },
    {
        titolo: "Prima persona singolare",
        citazione: "Cambiando l’esposizione dei raggi del sole, l’ombra diventa luce, la luce diventa ombra. Il positivo diventa negativo, e viceversa",
        src: "https://www.ibs.it/images/9788806248284_0_536_0_75.jpg",
        link: "https://www.amazon.it/Prima-persona-singolare-Haruki-Murakami/dp/8806248286/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=CU10USRP3RTQ&keywords=prima+persona+singolare&qid=1666554817&qu=eyJxc2MiOiIwLjQyIiwicXNhIjoiMC4xOCIsInFzcCI6IjAuMjEifQ%3D%3D&sprefix=prima+persona+singolar%2Caps%2C214&sr=8-1",
    },

    {
        titolo: "Homo Sapiens",
        citazione: "Siamo dei che si sono fatti da sè.",
        src: "https://www.ibs.it/images/9788845296499_0_536_0_75.jpg",
        link: "https://www.amazon.it/Sapiens-animali-Breve-storia-dellumanit%C3%A0/dp/8845296490/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=WEI089GNRYD0&keywords=homo+sapiens&qid=1666554827&qu=eyJxc2MiOiIyLjg1IiwicXNhIjoiMi40MCIsInFzcCI6IjIuMzYifQ%3D%3D&sprefix=homo+sapien%2Caps%2C161&sr=8-1",
    },
    {
        titolo: "Da zero a uno",
        citazione: "Il monopolio è la condizione di ogni business di successo",
        src: "https://m.media-amazon.com/images/I/71smRBsS57L.jpg",
        link: "https://www.amazon.it/segreti-startup-ovvero-costruisce-futuro/dp/8817080462/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1GMFO4F75D74D&keywords=da+zero+a+uno&qid=1666554841&qu=eyJxc2MiOiIxLjI5IiwicXNhIjoiMC44OCIsInFzcCI6IjAuNzUifQ%3D%3D&sprefix=da+zero+a+%2Caps%2C222&sr=8-1",
    },
    {
        titolo: "Tim Cook",
        citazione: "Non ho mai riconosciuta la mia sessualità pubblicamente. Quindi fatemi essere chiaro: sono fiero di esseregay",
        src: "https://m.media-amazon.com/images/I/419maTdPYrL.jpg",
        link: "https://www.amazon.it/Cook-genio-cambiato-futuro-Apple/dp/8820067609/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1MZKCJRYRJQW7&keywords=tim+cook&qid=1666554850&qu=eyJxc2MiOiIxLjMxIiwicXNhIjoiMC45NyIsInFzcCI6IjAuODgifQ%3D%3D&sprefix=tim+co%2Caps%2C284&sr=8-1",
    },
    {
        titolo: "Momenti di trascurabile felicità",
        citazione: "Tutte le cose che bisogna fare, mi piace rimandarle, oppure averle già fatte.",
        src: "https://m.media-amazon.com/images/I/61u6kJLydPL.jpg",
        link: "https://www.amazon.it/Momenti-trascurabile-felicit%C3%A0-Francesco-Piccolo/dp/8806219650/ref=sr_1_1?keywords=momenti+di+trascurabile+felicit%C3%A0&qid=1666554860&qu=eyJxc2MiOiIwLjgwIiwicXNhIjoiMC40MiIsInFzcCI6IjAuNDkifQ%3D%3D&sprefix=momenti+di+tr%2Caps%2C256&sr=8-1",
    },
    {
        titolo: "Let my people go surfing",
        citazione: "Non superare mai i tuoi limiti. Spingili al massimo e vivi per quei momenti, ma non andare oltre.",
        src: "https://www.ibs.it/images/9788865492611_0_536_0_75.jpg",
        link: "https://www.amazon.it/people-surfing-filosofia-imprenditore-ribelle/dp/8865492619/ref=sr_1_1?keywords=let+my+people+go+surfing&qid=1666554869&qu=eyJxc2MiOiIxLjQ1IiwicXNhIjoiMS4wNiIsInFzcCI6IjEuMjAifQ%3D%3D&sprefix=let+my%2Caps%2C250&sr=8-1",
    },
    {
        titolo: "Fahreneith 451",
        citazione: "Un libro è una pistola carica.",
        src: "https://upload.wikimedia.org/wikipedia/en/d/db/Fahrenheit_451_1st_ed_cover.jpg",
        link: "https://www.amazon.it/Fahrenheit-451-Ray-Bradbury/dp/8804665297/ref=sr_1_1?keywords=fahrenheit+451&qid=1666554880&qu=eyJxc2MiOiIxLjYwIiwicXNhIjoiMC45MiIsInFzcCI6IjAuOTIifQ%3D%3D&sprefix=fahren%2Caps%2C399&sr=8-1",
    },
    {
        titolo: "Il Grande Gatsby",
        citazione: "La trovai sdraiata sul letto nel suo vestito a fiori bella come una notte di giugno e ubriaca come una scimmia",
        src: "https://m.media-amazon.com/images/I/41y-+nsBaRL.jpg",
        link: "https://www.amazon.it/grande-Gatsby-Francis-Scott-Fitzgerald/dp/8807900238/ref=sr_1_2?keywords=il+grande+gatsby&qid=1666554891&qu=eyJxc2MiOiIzLjY2IiwicXNhIjoiMi43OCIsInFzcCI6IjIuNzkifQ%3D%3D&sprefix=il+gra%2Caps%2C286&sr=8-2",
    },
    {
        titolo: "L'unica regola è che non ci sono regole",
        citazione: "Non c'è nessuna politica. Usa il buon senso. Agisci nell'interesse di Netflix.",
        src: "https://m.media-amazon.com/images/I/41aRXSNYHJL.jpg",
        link: "",
    },
    {
        titolo: "Le tre del mattino",
        citazione: "Si è fatto tardi molto presto.",
        src: "https://www.einaudi.it/content/uploads/2017/10/978880623607HIG.JPG",
        link: "https://www.amazon.it/tre-del-mattino-Gianrico-Carofiglio/dp/8806240706/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3IFRRP04A4TBT&keywords=le+tre+del+mattino&qid=1666554906&qu=eyJxc2MiOiIwLjQ1IiwicXNhIjoiMC4xNyIsInFzcCI6IjAuMjIifQ%3D%3D&sprefix=le+tre+del+matt%2Caps%2C295&sr=8-1",
    },
    {
        titolo: "New York è una città senza tende",
        citazione: "Qualcuno dice che siccome Manhattan è un isola, per continuare a vivere è costretta a demolire e ricostruire.",
        src: "https://www.ibs.it/images/9788858130421_0_424_0_75.jpg",
        link: "https://www.amazon.it/New-York-finestra-senza-tende/dp/8858130421/ref=sr_1_1?keywords=new+york+%C3%A8+una+finestra+senza+tende&qid=1666554917&qu=eyJxc2MiOiIwLjI5IiwicXNhIjoiMC4wOCIsInFzcCI6IjAuMjMifQ%3D%3D&sprefix=new+york+%C3%A8%2Caps%2C231&sr=8-1",
    },
    {
        titolo: "Norvegian Wood",
        citazione: "Prendere le cose sul serio non sempre significa avvicinarsi alla verità",
        src: "https://m.media-amazon.com/images/I/81RARTnoWjL.jpg",
        link: "https://www.amazon.it/Norwegian-wood-Tokyo-Haruki-Murakami/dp/8806216465/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2V9SV1H7Y2LDY&keywords=norwegian+wood&qid=1666554930&qu=eyJxc2MiOiIxLjM2IiwicXNhIjoiMC44NyIsInFzcCI6IjAuODgifQ%3D%3D&sprefix=norveg%2Caps%2C372&sr=8-1",
    },
    {
        titolo: "The Hate u Give",
        citazione: "Thug Life stood for 'The Hate U Give Little Infants Fucks Everybody'",
        src: "https://www.ibs.it/images/9788809836402_0_536_0_75.jpg",
        link: "https://www.amazon.it/Hate-Give-coraggio-della-verit%C3%A0/dp/8809909909/ref=sr_1_1?keywords=the+hate+u+give&qid=1666554940&qu=eyJxc2MiOiIyLjQyIiwicXNhIjoiMi4wOSIsInFzcCI6IjIuMTIifQ%3D%3D&sprefix=the+hate%2Caps%2C634&sr=8-1",
    },
    {
        titolo: "After Dark",
        citazione: "La memoria umana è veramente strana: c'è conservata dentro un sacco di roba inutile, un sacco di cianfrusaglie.",
        src: "https://www.ibs.it/images/9788806217006_0_536_0_75.jpg",
        link: "https://www.amazon.it/After-dark-Haruki-Murakami/dp/8806217003/ref=sr_1_1?crid=2X4ISDSJZC33J&keywords=after+dark+murakami&qid=1666554955&qu=eyJxc2MiOiIwLjgwIiwicXNhIjoiMC41NyIsInFzcCI6IjAuNTEifQ%3D%3D&sprefix=after+da%2Caps%2C419&sr=8-1",
    },
    {
        titolo: "La mia vita per la libertà",
        citazione: "Voi occidentali, avete l'ora ma non avete mai il tempo.",
        src: "https://m.media-amazon.com/images/I/61SHXU6a9DL.jpg",
        link: "https://www.amazon.it/libert%C3%A0-Lautobiografia-profeta-della-non-violenza/dp/8854171654/ref=sr_1_1?keywords=la+mia+vita+per+la+libert%C3%A0&qid=1666554968&qu=eyJxc2MiOiIxLjA5IiwicXNhIjoiMC41OSIsInFzcCI6IjAuNzIifQ%3D%3D&sprefix=la+mia+vita+per+la+liber%2Caps%2C179&sr=8-1",
    },
    {
        titolo: "Il Potere delle Abitudini",
        citazione: "I campioni non fanno cose straordinarie. Fanno cose normali seguendo un abitudine.",
        src: "https://m.media-amazon.com/images/I/715dxFl2lSL.jpg",
        link: "https://www.amazon.it/potere-abitudini-formano-condizionano-cambiarle/dp/8850236905/ref=sr_1_1?keywords=il+potere+delle+abitudini&qid=1666554978&qu=eyJxc2MiOiIwLjgxIiwicXNhIjoiMC4zOSIsInFzcCI6IjAuMjgifQ%3D%3D&sprefix=il+potere+de%2Caps%2C184&sr=8-1",
    },
    {
        titolo: "Kafka sulla Spiaggia",
        citazione: "Poesia e simbolismo sono sempre stati inseparabili. Come i pirati e il rum.",
        src: "https://m.media-amazon.com/images/I/61R0XpGhHgL.jpg",
        link: "https://www.amazon.it/Kafka-sulla-spiaggia-Haruki-Murakami/dp/8806216945/ref=sr_1_1?keywords=kafka+sulla+spiaggia+murakami&qid=1666554989&qu=eyJxc2MiOiIwLjk3IiwicXNhIjoiMC41MSIsInFzcCI6IjAuNDAifQ%3D%3D&sprefix=kafka+sulla%2Caps%2C209&sr=8-1",
    },
    {
        titolo: "L'ordine del Tempo",
        citazione: "Il tempo passa più velocemente in montagna che in collina.",
        src: "https://m.media-amazon.com/images/I/71GL+ee5ddL.jpg",
        link: "https://www.amazon.it/Lordine-del-tempo-Carlo-Rovelli/dp/8845931927/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3AKZZF3K9NAAY&keywords=l%27ordine+del+tempo&qid=1666555000&qu=eyJxc2MiOiIwLjQ3IiwicXNhIjoiMC4zMCIsInFzcCI6IjAuMjQifQ%3D%3D&sprefix=l+ordine+del+tem%2Caps%2C205&sr=8-1",
    },
    {
        titolo: "IL Nome della Rosa",
        citazione: "Spesso sono gli inquisitori a creare gli eretici.",
        src: "https://m.media-amazon.com/images/I/81dhmnbA1VL.jpg",
        link: "https://www.amazon.it/nome-della-rosa-Ediz-illustrata/dp/8834603001/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1LVL1YP35Z1LT&keywords=il+nome+della+rosa&qid=1666555010&qu=eyJxc2MiOiIyLjIxIiwicXNhIjoiMS4yNyIsInFzcCI6IjEuMTcifQ%3D%3D&sprefix=il+nome+della+ro%2Caps%2C190&sr=8-1",
    },
    {
        titolo: "L'estate che conobbi il Che",
        citazione: "«Ma cosa c’entra la scuola con la rivoluzione?» «Cesare, la rivoluzione si fa con le idee, non con i fucili».",
        src: "https://m.media-amazon.com/images/I/81dhmnbA1VL.jpg",
        link: "https://www.amazon.it/Lestate-che-conobbi-Luigi-Garlando/dp/8817096466/ref=sr_1_1?keywords=l+estate+che+conobbi+il+che&qid=1666555026&qu=eyJxc2MiOiIwLjc2IiwicXNhIjoiMC40MiIsInFzcCI6IjAuMjYifQ%3D%3D&sprefix=l%27estate+che+conob%2Caps%2C183&sr=8-1",
    },
    {
        titolo: "La sottile arte di fare quello che cazzo ti pare",
        citazione: "La società confonde l'attenzione con il successo. Il semplice fatto di poter scegliere i valori per cui sbatterci ci rende persone di successo.",
        src: "https://www.ibs.it/images/9788822707475_0_536_0_75.jpg",
        link: "https://www.amazon.it/scorretto-efficace-liberarsi-irritanti-problemi/dp/8822707451/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=",
    },
    {
        titolo: "CARCHITECTURE - Houses with horsepower",
        citazione: "Homes should be built in factories similar to those for automobiles",
        src: "https://m.media-amazon.com/images/I/41SfoJBKnNL.jpg",
        link: "https://www.amazon.it/Carchitecture-Houses-Horsepower-Thijs-Demeulemeester/dp/9401461031",
    },




]

export {libri}