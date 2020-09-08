class Comments {


    logo: HTMLImageElement;
    blogTitle: HTMLHeadingElement;

    constructor() {
    //DOM elements
    this.logo=document.querySelector('#logo')! as HTMLImageElement;
    this.blogTitle = document.querySelector('#blogTitle') as HTMLHeadingElement;
    
    // Run Animations
        this.animateHeader();



    }

    animateHeader() {
        this.logo.classList.add('fadeInUp');
        this.blogTitle.classList.add('fadeInDown');
    }

}

new Comments();
