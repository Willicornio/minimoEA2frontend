import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { Subject } from '../models/subject';
import { Student } from '../models/student';
import {EscuelaService} from '../services/escuela';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-carreradetaill',
  templateUrl: './carreradetaill.page.html',
  styleUrls: ['./carreradetaill.page.scss'],
})
export class CarreradetaillPage implements OnInit {

  anadirForm: FormGroup;
  nameAsig: any;
  asignaturaActual: Subject;
  listaTodos: Student[];
  listaAlumnosActual: string [];
  submitted2= false;
  alumnoAñadido: Student;
  i: Int32Array;
  sutudentActual: Student;
 solounavez: string = "si";
  protected  listaTodos2: Student[] = [];
  constructor(private activatedRouter: ActivatedRoute,private formBuilder: FormBuilder, private escuelaservice: EscuelaService) { }


  ngOnInit() {
 

    

    // this.anadirForm = this.formBuilder.group({
    //   name: ['', Validators.required],

    // })


    
this.activatedRouter.params.subscribe(params => {
  if (typeof params['nameCarre'] !== 'undefined') {
    this.nameAsig = params['nameCarre'];
  } else {
    this.nameAsig = "No funciono >:C";
  }
});
 

if(this.solounavez == "si")
{
this.getCarrera(this.nameAsig);
}

 
  }

  get f() { return this.anadirForm.controls; }


refrescarAlumnos(lista : Student [])
{

  this.listaTodos2 = lista;
}

  onSubmit2(anadirForm: NgForm) {
    // this.submitted2 = true;
  
    // // stop here if form is invalid
    // if (this.anadirForm.invalid) {
    //     return;
    // }

    this.alumnoAñadido = new Student();
    this.alumnoAñadido.name = anadirForm.value.name;
    this.alumnoAñadido.adress = "";
    this.alumnoAñadido.phones = [];
    this.alumnoAñadido.studies = this.nameAsig;


    this.añadirAlumno(this.alumnoAñadido);
  }
 
  getCarrera(name: String)
  {
    this.escuelaservice.getCarrera(name)
      .subscribe(res => 
        {        
          
          this.listaTodos2 = res;
          //this.getCarrera(this.nameAsig);
        })
  }
 

  añadirAlumno(student: Student)
  { 
 
    this.escuelaservice.añadirCarrera(student.name , student)
      .subscribe(res => 
        {        if (res == 200){
          this.solounavez = "no";
          
      }   
        })
 
  }


 
}
