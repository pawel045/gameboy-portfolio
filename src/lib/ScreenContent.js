export class ScreenContent {
    constructor() {
      this.options = ['ABOUT ME', 'PROJECTS', 'SKILLS', 'CONTACT'];
      this.selectedIndex = 0;
      this.state = 'menu';
    }
  
    moveUp() {
      if (this.state === 'menu') {
        this.selectedIndex = (this.selectedIndex - 1 + this.options.length) % this.options.length;
      }
    }
  
    moveDown() {
      if (this.state === 'menu') {
        this.selectedIndex = (this.selectedIndex + 1) % this.options.length;
      }
    }
   
    goMenu() {
        this.state = 'menu';
    }

    select() {
        switch (this.options[this.selectedIndex]) {
            case 'ABOUT ME':
                this.state = 'about me';
                break;
            case 'PROJECTS':
                this.state = 'projects';
                break;
            case 'SKILLS':
                this.state = 'skills';
                break;
            case 'CONTACT':
                this.state = 'contact';
                break;
            default:
                this.state = 'menu';
        }
    }
  
    getContent() {
      if (this.state === 'menu') {
        return this.options.map((option, i) => {
          const prefix = i === this.selectedIndex ? '> ' : '  ';
          return prefix + option;
        });
      }
  
      if (this.state === 'about me') {
        return [
            'Hey — I dive into data systems,',
            'with roots in mech engineering.',
            'I’m always exploring new tech,',
            'tinkering, learning, building.',
            'Big data keeps things exciting.',
          ];
      }

      if (this.state === 'projects') {
        return ['Hello, this is Projects section'];
      }

      if (this.state === 'skills') {
        return ['Hello, this is', 'Skills section'];
      }

      if (this.state === 'contact') {
        return ['This is my email:', 'proszczyk96@gmail.com', '', '', 'Feel free to write to me :)'];
      }

  
      return [];
    }


  }




  