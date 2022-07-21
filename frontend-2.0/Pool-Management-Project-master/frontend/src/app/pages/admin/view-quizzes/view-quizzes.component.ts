import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {
  quizzes=[
    {
      qId: 15,
      title:'Basic of Java Quiz',
      description:'Core Java: Core Java is the part of Java programming language that is used for creating or developing a general-purpose application. Advanced Java: Advanced Java is also a part of Java programming language that generally deals with online application like the website and mobile application ...  ',
      maxMarks: '200',
      numberOfQuestions:'20',
      active: '',
      category:{
        title:'programming'
      }
    },
    {
      qId: 15,
      title:'Basic of Java Quiz',
      description:'Core Java: Core Java is the part of Java programming language that is used for creating or developing a general-purpose application. Advanced Java: Advanced Java is also a part of Java programming language that generally deals with online application like the website and mobile application ...',
      maxMarks: '200',
      numberOfQuestions:'20',
      active: '',
      category:{
        title:'programming'
      }
    },
  ];

  constructor(private _quiz:QuizService) { }

  ngOnInit(): void {
      this._quiz.quizzes().subscribe(
        (data:any)=>{
          this.quizzes=data;
          console.log(this.quizzes);
        },
        (error)=>{
          console.log(error);
          Swal.fire('Error !',"Something went wrong. Please try later.",'error');
        }
      )
  }

  public deleteQuiz(qId:any){
     Swal.fire({
       icon: 'info',
       iconColor: '#95AD8D',
       title: "Are you sure you you want to delete this quiz?",
       confirmButtonText: 'Delete',
       confirmButtonColor: '#95AD8D',
       showCancelButton: true,
       cancelButtonColor: '#AAC7A9'
     }).then((result)=>{
       if(result.isConfirmed){
         //delete quiz..
         this._quiz.deleteQuiz(qId).subscribe(
          (data)=>{
            this.quizzes = this.quizzes.filter((quiz)=>quiz.qId!=qId)
            Swal.fire('Sucess','Quizz deleted','success');
          },
          (error)=>{
            console.log(error);
            Swal.fire('Error !!', 'Something went wrong please try again', 'error');
          }
        );
       }
     });

  }

}
