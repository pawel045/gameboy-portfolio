export class ScreenContent {
    constructor() {
      this.options = ['ABOUT ME', 'PROJECTS', 'SKILLS', 'CONTACT', 'GAME'];
      this.selectedIndex = 0;
      this.state = 'menu';

      this.projectOptions = ['big tech stocks', 'humidity control system', 'car\'s mileage', 'car data platform'];
      this.projectLinks = [
        'https://github.com/pawel045/big-tech-stocks',
        'https://github.com/pawel045/humidity-control',
        'https://github.com/pawel045/car-mil',
        'https://github.com/pawel045/car-data-platform'
      ];
      this.selectedProjectIndex = 0;

      this.selectedSkillIndex = 0;
      this.skills = [
        '<<      Python      >>',
        '<<        SQL       >>',
        '<< Data Warehousing >>',
        '<<  Big Data Tools  >>'
      ];

    }
  
    moveUp() {
      if (this.state === 'menu') {
        this.selectedIndex = (this.selectedIndex - 1 + this.options.length) % this.options.length;
      } else if (this.state === 'projects') {
        this.selectedProjectIndex = (this.selectedProjectIndex - 1 + this.projectOptions.length) % this.projectOptions.length;
      }
    }
    
    moveDown() {
      if (this.state === 'menu') {
        this.selectedIndex = (this.selectedIndex + 1) % this.options.length;
      } else if (this.state === 'projects') {
        this.selectedProjectIndex = (this.selectedProjectIndex + 1) % this.projectOptions.length;
      }
    }

    moveLeft() {
      if (this.state === 'skills') {
        this.selectedSkillIndex = (this.selectedSkillIndex - 1 + this.skills.length) % this.skills.length;
      }
    }
    
    moveRight() {
      if (this.state === 'skills') {
        this.selectedSkillIndex = (this.selectedSkillIndex + 1) % this.skills.length;
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
            case 'GAME':
              this.state = 'game';  
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
            'Hey — Paweł here',
            'I dive into data engineering,',
            'with mechanical background',
            'and expirience in data analysis',
            'I’m always exploring new tech,',
            'tinkering, learning, building.',
            'Big data keeps things exciting.',
          ];
      }

      if (this.state === 'projects') {
        return this.projectOptions.map((project, i) => {
          const prefix = i === this.selectedProjectIndex ? '> ' : '  ';
          return prefix + project;
        })
      }

      if (this.state === 'skills') {
        return [this.skills[this.selectedSkillIndex]];
      }           

      if (this.state === 'contact') {
        return ['This is my email:', 'proszczyk96@gmail.com', '', 'Press A to copy ', 'Feel free to write to me :)'];
      }

      if (this.state === 'game') {
        return ['Hello, this is Game section'];
      }

      return [];
    }


  }




  