



angular.module("guideApp")
    .controller("jobsCtrl", function ($scope) {
         

        $scope.des ;
        $scope.time ;
        $scope.info;
        
        $scope.jobs = [
            {
            destination : "Beograd" ,
            timeAndDate : "22 avgust 2019 14h i 30min" ,
            info : "slabo placaju cuvaj se, spremi teske price"
            } ,
            {
            destination : "Nis" ,
            timeAndDate : "2 avgust 2022 11h i 30min" ,
            info : "pakao bas, bice mozda jake tuce i frke. Policiju pozvati posle 10minuta max"
                } ,
           {
            destination : "Novi Sad" ,
            timeAndDate : "12 jun 2023 17h i 30min" ,
            info : "ludnica u najavi,ocekuje se i jako prisustvo terorista"
            } ,   
    
    
    ]

    $scope.showOne =function(job){
    
     $scope.des = job.destination ;
     $scope.time = job.timeAndDate ;
     $scope.info = job.info ;
        
    }
        
    });