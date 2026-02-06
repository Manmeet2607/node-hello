pipeline {
    agent any

    tools {
        nodejs "node20"  // Configure NodeJS in Jenkins global tools
    }


    stages {
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
