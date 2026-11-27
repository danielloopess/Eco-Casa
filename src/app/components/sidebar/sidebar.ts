import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive  } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive ],
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
})
export class Sidebar {}
