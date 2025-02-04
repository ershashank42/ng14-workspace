import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.css']
})
export class InfiniteScrollComponent implements OnInit {

  items: any[] = [];       // To store loaded items
  page: number = 1;        // Current page
  loading: boolean = false; // To avoid multiple loads
  hasMoreItems: boolean = true;  // Flag to check if more items are available

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadData();  // Load initial data
  }

  // Function to load more data
  loadData() {
    if (this.loading || !this.hasMoreItems) return;  // Prevent loading if already loading

    this.loading = true;
    this.http
      .get(`https://jsonplaceholder.typicode.com/posts?_page=${this.page}&_limit=10`)
      .subscribe((data: any) => {
        this.items = [...this.items, ...data];  // Append new data to the list
        this.page++;  // Increment page for the next request

        if (data.length < 10) {
          this.hasMoreItems = false;  // If fewer than 10 items are returned, there are no more items
        }
        this.loading = false;  // Reset loading flag
      });
  }

  // HostListener to listen to the scroll event
  @HostListener('window:scroll', [])
  onScroll() {
    // Check if the user has scrolled to the bottom of the page
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Trigger loadData if user is near the bottom of the page
    if (scrollPosition >= documentHeight - 10 && !this.loading) {
      this.loadData();  // Load more data when the user scrolls near the bottom
    }
  }

}
