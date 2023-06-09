export class ProjectFetch {
  constructor(Selector) {
    this.container = document.querySelector(Selector);
    this.getFetchPost();
  }

  async getFetchPost() {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
      );
      const projects = await response.json();
      this.domProject(projects);
    } catch {
      console.log(error);
    }
  }

  domProject(projects) {
    const array = projects[3];
    // console.log(array);
    const arrayElement = `<h1>${array.name}</h1>
             <div class="project-post-title-date">
                 <h4>${array.description}</h4>
                 <h5>Completed on 02/02/23</h5>
             </div>
             <div class="img-container"></div>
             <p>${array.content}</p>`;

    this.container.innerHTML = arrayElement;
  }
}
