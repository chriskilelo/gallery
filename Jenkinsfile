pipeline{
    agent any
    tools{
        nodejs 'node'
    }
    stages{
        stage('Clone the repository.'){
            steps{
                git branch: 'master', url: 'https://github.com/chriskilelo/gallery'
            }
        }        
        stage("Install Dependencies"){
            steps{
                sh "npm install"
            }
        }
        stage("Run Tests"){
            steps{
                sh "npm test"
            }
        }        
        stage("Start NodeJS Server"){
            steps{
                sh "node server.js"
            }
        }
    }
    post {
        failure {
            emailext (
                to: 'christopher.kilelo@student.moringaschool.com',
                subject: "Build Failed: ${currentBuild.fullDisplayName}",
                body: """<p>Something went wrong with the build.</p>
                          <p>Check the logs at: <a href="${env.BUILD_URL}">Build Link</a></p>""",
                mimeType: 'text/html'
            )
        }
    }    
}
