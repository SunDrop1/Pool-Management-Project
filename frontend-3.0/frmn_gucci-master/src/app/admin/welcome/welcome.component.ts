import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  images=[
    {
      imageSrc:
      'https://arryadia.snrt.ma/images/FRMN_LOGO_NATATION.jpg',
      imageAlt:'image1',
    },
    {
      imageSrc:
      'https://pbs.twimg.com/media/B3j4GoqIUAAYjAP.jpg',
      imageAlt:'image2',
    },
    {
      imageSrc:
      'https://arryadia.snrt.ma/images/Championnat_Maroc_natation_2018.jpg',
      imageAlt:'image3',
    },
    {
      imageSrc:
      'https://arryadia.snrt.ma/images/Coupe_Trone_natation_2018.jpg',
      imageAlt:'image4',
    },
    {
      imageSrc:
      'http://newsletter.cnom.org.ma/sites/default/files/jil%20natation.jpeg',
      imageAlt:'image5',
    },
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
