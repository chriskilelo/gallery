pipeline{
    agent any
    stages{
        stage("Install Dependencies"){
            steps{
                sh "npm install"
            }
        }
        stage("Start NodeJS Server"){
            steps{
                sh "node server.js"
            }
        }
    }
}