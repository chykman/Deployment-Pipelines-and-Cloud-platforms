# Deployment-Pipelines-and-Cloud-platforms

## *Introduction to Deployment pipelines*

A deployment pipeline is a structured process used to deliver software from development to production. Its stages typically include:

1. **Code Development**: Writing and committing code to a version control system.
2. **Build**: Compiling code and creating executable artifacts.
3. **Testing**: Running automated tests (unit, integration, etc.) to ensure quality.
4. **Staging**: Deploying to a pre-production environment for final validation.
5. **Deployment**: Releasing the software to the production environment.

Different deployment strategies include:
- **Canary Deployment**: Gradually rolling out changes to a small subset of users.
- **Blue-Green Deployment**: Using two identical environments, switching traffic when ready.
- **Rolling Deployment**: Updating instances incrementally with no downtime.


 ## AUTOMATED VERSIONING
 
 * ![image](https://github.com/user-attachments/assets/7458d392-895c-45f6-8d1b-380d27af1d29)

## AUTOMATING RELEASES

* ![image](https://github.com/user-attachments/assets/2cf3e3a9-e288-46c3-8977-020479fbb243)

  
## Deploying Applications to Cloud platform through GITACTIONS

* Choose a Cloud platform and create a server on it

  ![image](https://github.com/user-attachments/assets/53d106ee-dde5-4f8c-b1a8-fdd3f846a83b)

* Create your Workflow file , this deploys changes on the main branch to AWS 

  ![image](https://github.com/user-attachments/assets/3022cf8c-d941-428b-b62e-68681e00585c)


## Configuring Deployment Environment

*  Go to AWS IAM management console Create ec2 manager profile
  ![image](https://github.com/user-attachments/assets/7a49cf92-fd71-43b3-a9dd-47dfc1a12016)
* Grant EC2 access
![image](https://github.com/user-attachments/assets/c7d95c0c-b51f-44bf-af53-d8b6e68599c3)
* Download your Access keys
![image](https://github.com/user-attachments/assets/b2517488-c623-4590-996a-0f81165ba6a6)

![image](https://github.com/user-attachments/assets/6862dcf0-1eac-41f1-9593-90741529c532)

* Go to Github and store your Access keys under Secrets and Variable
* ![image](https://github.com/user-attachments/assets/e7965e43-a0cf-4b3c-924c-396f9ab02030)

* In repository Secrets , enter your Access key values
  ![image](https://github.com/user-attachments/assets/592f08b8-7ae6-43d0-a3a8-d21dd6daa695)
* Modify your workflow to deploy to AWS ec2 instance
  ![image](https://github.com/user-attachments/assets/384d5dd9-5409-4c1a-a425-1aa498732304)

  ![image](https://github.com/user-attachments/assets/020d892e-c860-47f9-9eb3-a0cf61e3b8f3)



  








