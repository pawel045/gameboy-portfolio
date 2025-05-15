import { pass } from "three/tsl";
import sqlLogo from '/src/assets/logo/sqlLogo.png';
import pythonLogo from '/src/assets/logo/pythonLogo.png';
import dwhLogo from '/src/assets/logo/dwhLogo.png';
import bigdataLogo from '/src/assets/logo/bigdataLogo.png';

export class ScreenContent {
    constructor() {
      this.options = ['ABOUT ME', 'PROJECTS', 'SKILLS', 'CONTACT']; //, 'GAME'];
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
  
      this.skillNames = ['skills_python', 'skills_sql', 'skills_dwh', 'skills_bdt']

      this.skillLogos = {
        'Python': { image: new Image(), loaded: false, src: pythonLogo },
        'SQL': { image: new Image(), loaded: false, src: sqlLogo },
        'Data Warehousing': { image: new Image(), loaded: false, src: dwhLogo },
        'Big Data Tools': { image: new Image(), loaded: false, src: bigdataLogo },
        // Add more skills and logos as needed
      };

      this.skills = Object.keys(this.skillLogos);

      Object.keys(this.skillLogos).forEach(skill => {
        const entry = this.skillLogos[skill];
        entry.image.onload = () => entry.loaded = true;
        entry.image.src = entry.src;
      });

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
        if (this.state === 'skills') {
          switch (this.skills[this.selectedSkillIndex]) {
            case 'Python':
              this.state = 'skills_python';
              break;
            case 'SQL':
                this.state = 'skills_sql';
                break;
            case 'Data Warehousing':
              this.state = 'skills_dwh';
            break;
            case 'Big Data Tools':
              this.state = 'skills_bdt';
            break;
            default:
              this.state = 'skills';
          }
        } else if ([...this.skillNames].includes(this.state)) {
          this.state = 'skills'
        } else {
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
          }}
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

      if (this.state === 'skills_python') {
        return [
          '> Advanced Python',
          '> Process data - Pandas,PySpark',
          '> Connecting with API/DB',
          '> Docker,Git/Github',
          '> OOP,Design Patterns',
          '> WebDev - Flask',
          '> Webscraping - Selenium,bs4'
        ];
      }   

      if (this.state === 'skills_sql') {
        return [
          '> Advanced SQL',
          '> Relational DB:',
          '    PostgreSQL',
          '    Vertica',
          '> NoSQL DB:',
          '    MongoDB',
        ];
      }

      if (this.state === 'skills_dwh') {
        return [
          '> Knowledge of Data Modeling:',
          '    Star and Snowflake Schemas',
          '    Fact and Dimension Tables',
          '    Slowly Changing Dimensions',
          '> ETL/ELT processes',
          '> Data streaming',
        ];
      }

      if (this.state === 'skills_bdt') {
        return [
          '> Big Data Techs:',
          '    GCP (in preperation for',
          '    data engineer certification)',
          '    Kafka',
          '    Spark (PySpark)',
          '    Airflow'
        ];
      }

      if (this.state === 'contact') {
        return ['This is my email:', 'proszczyk96@gmail.com', '', 'Press A to copy ', 'Feel free to write to me :)'];
      }

      if (this.state === 'game') {
        return [
          'There will be a',
          'game here soon :)'
        ];
      }

      return [];
    }
  }




  