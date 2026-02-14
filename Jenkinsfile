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
                echo "doing checkout"
                checkout scm
                echo "checkout done"
            }
        }
        stage('Install Dependencies') {
            steps {
                echo "install entered"
                sh 'npm install'
                sh 'npm install --save-dev jest'
                sh 'npm install --save-dev jest-junit'
                sh 'npm install --save-dev @babel/core @babel/cli @babel/preset-env'
                echo "install finished"
            }
        }
        stage('Run Tests') {
            steps {
                echo "run test"
                sh 'npm test'
                echo "test completed"
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

}
