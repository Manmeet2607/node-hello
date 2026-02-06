pipeline {
    agent any

    tools {
        nodejs "node20"  // Make sure NodeJS tool is configured in Jenkins global tools
    }

    options {
        cleanWs()
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh "apt-get update && apt-get install -y libatomic1"
                sh "npm install"
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
