module.exports = deleteIssue;

const deleteIssue =(id) =>{
    var issues = JSON.parse(localStorage.getItem('issues'));

    for(var i=0; i< issues.length; i++){
        if(issues[i].id == id){
            issues.splice(i,1);
        }
    }
    localStorage.setItem('issues',JSON.stringify(issues));

    fetchIssues();
}