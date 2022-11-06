function fetchIssues () {
    let issues = JSON.parse(localStorage.getItem('issues'))
    let issuesList = document.getElementById('issuesList')

    issuesList.innerHTML = '';

    for(let i=0; i < issues.length; i++) {
        let id = issues[i].id
        let subject = issues[i].subject
        let description = issues[i].description
        let serverity = issues[i].serverity
        let assignedTo = issues[i].assignedTo
        let status = issues[i].status
    }
}