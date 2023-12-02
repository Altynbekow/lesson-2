// типы данных
// 1string
// 
// ключивые слова var let const 
// операторы (=,==,===,+,-,/.*,>< >= <=,)
var carname = "fit"
var username=`kolbai`
// 2 number
var appleprice2=100
var battterymass=70

// 3 boolean
var issnow=false
var issnow2=true
// 4 null
var baha=null
baha=`baha`
// 5 undefined
var jok;
// 6--
var id=Symbol('userid')
// 7-- bightint
var maxkm =100n

// 8 object{},array[]
var headermenu=['home','about','contact',]
var table={
    // key:value
    color:'red',
    height:2,
    width:3,
    matterial:'metal'
}
var user={
    name:'kolbai',
    ismarried:false,
    salary:500000,
    age:20,
    car:null,
}

var baby = {
    image: 'http://www.nurcinema.kg/upload/movies/movie_1203/thumb.jpg',
    movieName: "Малыш",
    year: 2023,
    author: "Учкун Жакыпбеков",
    description: `
    Талант отчаянный хулиган из провинциального городка Балыкчы.  Однаждны в очередной драке он пулучает травму головы и умственно становится настоящим младенцем. Маме Таланта Толгонай приходится воспитывать своего большого сына с самого начало и сделать его снова взрослым человеком, но к ней на помощ приходит Бакыт, который давно женился бы на Толгонай, если бы не Талант.`,
    country: "Кыргызстан",
    genre: 'Комедия, драма',
    roles: ['Аскат Сулайманов',' Шумкарбек Бейшеналиев', 'Элмира Тагаева', 'Адеми Бейшенбекова']
  }

  document.write(`<img src='${baby.image}'alt='image' />`)
  document.write(`<h3>${baby.movieName}</h3>`)
  document.write(`<h3>${baby.year} - жыл </h3>`)
  document.write(`<h3>${baby.country}</h3>`)
  document.write(`<h3>${baby.author}</h3>`)
  document.write(`<h3>${baby.roles[0]}</h3>`)
  document.write(`<h3>${baby.roles[1]}</h3>`)
  document.write(`<h3>${baby.roles[2]}</h3>`)
  document.write(`<h3>${baby.roles[3]}</h3>`)
  document.write(`<h3>${baby.description}</h3>`)