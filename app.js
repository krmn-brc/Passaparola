
const answer = document.getElementById("answer-input");
const btns =  document.querySelector('.letters').children;
const question = document.getElementById("question-p");


let answerTrue = 0, answerFalse = 0;
let chr ='';
let i = 0;



document.getElementById("btn").addEventListener('click', (el) => {
          
        if (i < questions.length) {
              changeStyleBtn("black", "yellow", i);
              chr = btns[i].firstElementChild.innerText;
              let qa = getQuestion();
              question.innerText = qa.question;
              el.target.innerHTML = "Sonraki Soru";
              answer.disabled = false;
              
        } else {
              alert('Sorular bitti ')
        }
              
})





answer.addEventListener('keydown', e => {
       if(e.keyCode === 13)
       {
              if(answer.value == "")
                     alert("Lütfen cevap giriniz! :)")
              else{
                     let qa = getQuestion();
                     if(qa.answer.toLowerCase() == answer.value.trim().toLowerCase()) 
                     {
                            changeStyleBtn("white", "green", i)
                            answerTrue++;
                            writingResult(answerTrue, answerFalse);
                     }
                     else
                     {
                            changeStyleBtn("white", "red", i);
                            answerFalse++;
                            writingResult(answerTrue, answerFalse);
                     }
                     i++;
                     answer.disabled = true;
                     answer.value ="";   
              }
       }
})

function writingResult(answerTrue, answerFalse) {
       let tr = document.querySelector('#tr');
       let fs = document.querySelector('#fs');
       
       tr.innerHTML = "Doğru: " + answerTrue
       fs.innerHTML = "Yanlış: " + answerFalse
      
        
}

function changeStyleBtn(txtClr, bg, index) {
       btns[index].firstElementChild.style.background = bg;
       btns[index].firstElementChild.style.color = txtClr;
}

function getQuestion() {
       return questions.find(x => x.answer.startsWith(chr));
}




let questions = [

       //A
       {question:"Endonezya Devleti Hangi Kıtadadır?", answer:"Asya"},
       //B
       {question:"Dünya Kupası'nı en çok kazanan ülke hangisidir?", answer:"Brezilya"},
       //C
       {question:"Adana'nın bir ilçesinin adı", answer:"Ceyhan"},
       //Ç
       {question:"Pirinç hangi ürünün kabuğunun soyulması ile elde edilir?", answer:"Çeltik"},
       //D
       {question:"Vucuttaki en güçlü kas hangisidir?", answer:"Dil Kası"},
       //E
       {question:"Uşak ili hangi bölgededir?", answer:"Ege Bölgesi"},
       //F
       {question:"Rumeli hisarını hangi padişah yaptırmıştır?", answer:"Fatih Sultan Mehmet"},
       //G
       {question:"Yerden fışkırarak çıkan sıcak su kaynaklarına ne denir?", answer:"Gayzer"},
       //H
       {question:"Künefesi ile meşhur ilimizin adı nedir?", answer:"Hatay"},
       //I
       {question:"Gülü ile meşhur olan ilimiz hangisidir?", answer:"Isparta"},
       //İ
       {question:"Köylülerin el birliği ile köyün işini birlikte yapmalarına ne ad verilir?", answer:"İmece"},
       //J
       {question:"Jelatin bazlı yapılan bir tatlı", answer:"Jole"},
       //K
       {question:"Simgesi (Ca) olan elementin adı nedir?", answer:"Kalsiyum"},
       //L
       {question:"Kızınca tüküren hayvan hangisidir?", answer:"Lama"},
       //M
       {question:"İstanbul hangi coğrafi bölgemizde yer almaktadır?", answer:"Marmara Bölgesi"},
       //N
       {question:"Bozkırın tezenesi lakaplı rahmetli halk ozanı kimdir?", answer:"Neşet Ertaş"},
       //O
       {question:"Cevdet Bey Ve Oğulları Eseri Kime Aittir?", answer:"Orhan Pamuk"},
       //Ö
       {question:"2. Halifenin Adı nedir?", answer:"Ömer bin Hattab"},
       //P
       {question:"... Kadar değerim yok diyen kişi neyi kast etmiştir?", answer:"Pul"},
       //R
       {question:"Türkiye’nin çayı ile meşhur ili hangisidir?", answer:"Rize"},
       //S 
       {question:"Dünyanın ilk kadın savaş pilotu kimdir?", answer:"Sabiha Gökçen"},
       //Ş
       {question:"İlk yerli tiyatro eseri kime aittir?", answer:"Şinasi"},
       //T
       {question:"Keçinin erkeğine ne ad verilir?", answer:"Teke"},
       //U
       {question:"Hicret'in üçüncü yılında 23 Mart 625 tarihinde ki savaş nerede yapılmıştır?", answer:"Uhud"},
       //Ü
       {question:"Bir şeyden beklenti ummaya nedir?", answer:"Ümit"},
       //V
       {question:"Güneş Sistemi'nin en sıcak gezegeni hangisidir?", answer:"Venüs"},
       //Y
       {question:"Türkiye'de kaç tane çoğrafi bölge bulunmaktadır?", answer:"Yedi"},
       //Z
       {question:"İslamın beş şartından biri nedir?", answer:"Zekat"}
]