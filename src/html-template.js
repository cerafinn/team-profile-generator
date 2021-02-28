// other file with function to create cards based on employee type (3) and function to create HTML (include inline or in header css)
const createHTML = teamArray => {
  const teamCards = []

  const managerCard = manager => {
    return `
  <div class="card m-3 p-0" style="max-width: 240px">
    <div class="card-body p-0">
      <div class="card-header bg-primary text-white">
        ${manager.getName()}<br>
        ${manager.getRole()}
      </div>
      <ul class="list-group p-3" style="background-color: #e4e3e3;">
        <li class="list-group-item pl-0">ID: ${manager.getId()}</li>
        <li class="list-group-item pl-0">EMAIL: ${manager.getEmail()}</li>
        <li class="list-group-item pl-0">OFFICE NUMBER: ${manager.getNumber()}</li>
      </ul>
    </div>
  </div>
  `
  }

  const engineerCard = engineer => {
    return `
  <div class="card m-3 p-0" style="max-width: 240px">
    <div class="card-body p-0">
      <div class="card-header bg-primary text-white">
        ${engineer.id}<br>
        Engineer
      </div>
      <ul class="list-group p-3" style="background-color: #e4e3e3;">
        <li class="list-group-item pl-0">ID: ${engineer.id}</li>
        <li class="list-group-item pl-0">EMAIL: ${engineer.email}</li>
        <li class="list-group-item pl-0">GitHub: ${engineer.github}</li>
      </ul>
    </div>
  </div>
  `
  }

  const internCard = intern => {
    return `
  <div class="card m-3 p-0" style="max-width: 240px">
    <div class="card-body p-0">
      <div class="card-header bg-primary text-white">
        ${intern.name}<br>
        Intern
      </div>
      <ul class="list-group p-3" style="background-color: #e4e3e3;">
        <li class="list-group-item pl-0">ID: ${intern.id}</li>
        <li class="list-group-item pl-0">EMAIL: ${intern.email}</li>
        <li class="list-group-item pl-0">SCHOOL: ${intern.school}</li>
      </ul>
    </div>
  </div>
  `
  }

  teamCards.push(teamArray
    .filter(employee => employee.getRole() === 'Manager')
    .map(manager => managerCard(manager)));

  teamCards.push(teamArray
    .filter(employee => employee.getRole() === 'Engineer')
    .map(engineer => engineerCard(engineer))
    .join(''));

  teamCards.push(teamArray
    .filter(employee => employee.getRole() === 'Intern')
    .map(intern => internCard(intern))
    .join(''));

    return teamCards.join('');
}
// add each team member to an array to create the cards within the template literal

module.exports = teamArray => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
  </head>
  <body>
    <!-- insert header for the webpage -->
    <header class="justify-content-center">
      <h1 class="text-white bg-danger text-center py-3">My Team</h1>
    </header>
  
  
    <div class="container">
      <div class="row">
  
        <div class="d-flex flex-wrap col-12 justify-content-center">
  
            <!-- insert cards based on input from the app -->
            ${createHTML(teamArray)}
  
        </div>
      </div>
    </div>
  </body>
  </html>
  `
}