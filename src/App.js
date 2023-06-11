import React from 'react';
import './App.css';
import Card from './components/Card';

const heroes = [
  {
    name: "Бетмен",
    universe: "DC Comics",
    alterego: "Брюс Уэйн",
    occupation: "борец с преступностью, филантроп, миллиардер",
    friends: "Робин, Бэтгерл",
    superpowers: "интеллект, обширные познания, знания боевых искусств, ловкость",
    url: "https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg"
  },
  {
    name: "Супермен",
    universe: "DC Comics",
    alterego: "Кларк Кент",
    occupation: "борец за справедливость",
    friends: "собака Крипто",
    superpowers: "непробиваемость, суперсила, полёт, самоисцеление, суперзрение и суперслух, классный костюм",
    url: "https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg"
  },
  {
    name: "Железный человек",
    universe: "Marvel Comics",
    alterego: "Тони Старк",
    occupation: "гений, миллиардер, плейбой, филантроп",
    friends: "Мстители",
    superpowers: "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
    url: "https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg"
  },
  {
    name: "Спайдер-мен/Человек-паук",
    universe: "Marvel Comics",
    alterego: "Питер Паркер",
    occupation: "борец за справедливость, студент, фотограф",
    friends: "Мстители, Фантастическая четверка, Люди Икс",
    superpowers: "сверхчеловеческие рефлексы, «паучье чутьё», способность прилепляться к твердым поверхностям, производство паутины",
    url: "https://n1s1.hsmedia.ru/37/39/74/373974effcc7ccd093d849e8fa062091/547x397_0xac120002_9548247751540468871.jpg"
  },
  {
    name: "Капитан Америка",
    universe: "Marvel Comics",
    alterego: "Стивен Роджерс",
    occupation: "супер-солдат",
    friends: "Мстители",
    superpowers: "сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя",
    url: "https://n1s1.hsmedia.ru/41/8f/05/418f050c767eeca8854b328914c7bccc/547x397_0xac120002_20106541761540468871.jpg"
  }
]

function App() {
  return (
    <div className="App">
      {
        heroes.map((hero) =>
          <Card
            name={hero.name}
            universe={hero.universe}
            alterego={hero.alterego}
            occupation={hero.occupation}
            friends={hero.friends}
            superpowers={hero.superpowers}
            url={hero.url} />)
      }
    </div>
  );
}

export default App;
