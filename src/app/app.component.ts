import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: "Notre top des chats trilingues - le quatrième va vous impressionner",
      content: "Ces chats sont si mignons que vos yeux vont saigner. Non, réellement, ne cliquez pas sur ce lien, sauf si vous avez une soirée Halloween de prévu et que la vue n'est pas quelque chose d'important pour vous. Il est vrai que cela vous permettra notamment de ne plus voir votre oncle raciste et aux mains baladeuses - bien que sur ce dernier point, nous conseillons l'utilisation d'un piege à loups afin de pallier à votre manque sensoriel, qui fera dans le cas contraire les bonnes affaires de votre oncle libidineux.",
      loveIts: 0,
      createdAt: new Date('September 18, 2018 8:35:00')
    },
    {
      title: "Cette astuce de grand-mère rend dingue tous les dentistes",
      content: "Effectivement, mamie n'a plus de dents. Cela lui permet d'assurer une hygiène dentaire impeccable. 'Zéro carie, zéro rage de dent, et jamais besoin de fil dentaire', c'est le bilan de Georgette en 15 ans d'activité non-dentaire. 'Les dents, j'arrête, ça me fait plus marrer', avait-elle déclaré en Juin au monde Diplomatique dans le cadre d'un dossier spécial sur les Kurdes. Hors-sujet mais perspicace.",
      loveIts: -1,
      createdAt: new Date('December 17, 2019 15:24:00')
    },
    {
      title: "Patrick Balkany déclare : 'Balek, je suis pas vieux, osef !'",
      content: "Dernier revers dans l'affaire Balkany. D'après l'avocat de Patrick Balkany, 'Il s'agit d'une masquarade, on essaie de faire croire au public que mon client est âgé. Hors, il écoute du Maître Gims comme tout le monde.'. Appelé à la barre des témoins, M. Balkany s'est fendu d'un 'ouaich, juge', tout en roulant 'un gros t'as vu' (propos rapportés par le greffe du Tribunal de Grand Instance)",
      loveIts: 2,
      createdAt: new Date('September 14, 2019 14:10:00')
    },
  ]
}
