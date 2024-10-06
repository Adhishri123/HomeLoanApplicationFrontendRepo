import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usermenu } from '../../Model/usermenu';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent implements OnInit{
constructor(private router:Router,private activeroute:ActivatedRoute) { }
 userOptions:Array<any>;
 type:string;
 ngOnInit(): void {
   this.userOptions = Usermenu.menus;
   this.type = sessionStorage.getItem('userType');
   console.log(this.type)
 }
 navigateTo(link:string)
 {
    this.router.navigateByUrl('/userdash/'+this.type+'/'+link);
 }
}
