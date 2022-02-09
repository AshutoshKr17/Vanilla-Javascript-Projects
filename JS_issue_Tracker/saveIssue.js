module.exports = saveIssue;

saveIssue = (e) =>{
    let issueId = chance.guid();
    let issueDesc = document.getElementById('issueDescInput').value;
    let issueSeverity = document.getElementById('issueSeverityInput').value;
    let issueAssignedTo = document.getElementById('issueAssignedToInput').value;

    let issueStatus = 'open';

    let issue = {
        id : issueId,
        description : issueDesc,
        severity : issueSeverity,
        assignedTo : issueAssignedTo,
        status : issueStatus
    };
    if(localStorage.getItem('issue' == null)){
        var issues = [];
        issues.push(issue);
        localStorage.setItem('issues', JSON.stringify(issues));
    }else{
        var issues = JSON.parse(localStorage.getItem('issues'));
        issues.push(issue);
        localStorage.setItem('issues', JSON.stringify(issues));
    }

    document.getElementById('issueInputForm').reset();

    fetchIssues();

    e.preventDeafault();
}
