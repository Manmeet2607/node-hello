pipeline {
    agent any
    parameters{
        string(name:"APP_ENV", defaultValue : "dev",description: "this is the ennv where to run");
        booleanParam(name: "RUN_TESTS", defaultValue: true,description: "whetehr to run tests");
    }

    environment{
        NODE_ENV = "${params.APP_ENV}"
        secret = credentials('my_secret');
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                sh 'npm install --save-dev jest'
                sh 'npm install --save-dev jest-junit'
                sh 'npm install --save-dev @babel/core @babel/cli @babel/preset-env'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                echo "params is  : ${params.APP_ENV}"
                echo "env is : ${env.secret}"
                sh 'npm run build'
            }
        }
    }
    post {
        always {
            junit 'reports/junit.xml'
        }
    }

}
