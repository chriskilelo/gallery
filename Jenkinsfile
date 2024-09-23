pipeline{
    agent any
    stages{
        stage('Clone the repository.'){
            steps{
                git clone: 'master', url: 'https://github.com/chriskilelo/gallery'
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
}
