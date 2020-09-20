
var matrix=[
    [1,1,1,1,1],
    [1,1,1,1,1],
    [1,1,0,2,2],
    [2,2,2,2,2],
    [2,2,2,2,2]
];

function display(){
    var i,j;
    for( i=0;i<5;i++){
        for( j=0;j<5;j++){
            var x=(i+1).toString(10);
            x+=(j+1).toString(10);
            // console.log(x);
            if(matrix[i][j]==1){
                document.getElementById(x).style.backgroundColor="#ffe4c3";
            }
            else if(matrix[i][j]==0){
                document.getElementById(x).style.backgroundColor="#fff";
            }
            else{
                document.getElementById(x).style.backgroundColor="#5f9ea0";
            }
        }
    }
}

function countone(){
    let cone=0;
    var i,j;
    for(i=0;i<5;i++){
        for(j=0;j<5;j++){
            if(matrix[i][j]==1){
                cone++;
            }
        }
    }
    return cone;
}
function counttwo(){
    let ctwo=0;
    var i,j;
    for(i=0;i<5;i++){
        for(j=0;j<5;j++){
            if(matrix[i][j]==2){
                ctwo++;
            }
        }
    }
    return ctwo;
}

var count=0;
var sa,sb,da,db;

function return_id(x,y){
    count++;
    if(count%2==0){
        da=x-1;
        db=y-1;
        change();
        console.log("dis")
        display();
    }
    else{
        sa=x-1;
        sb=y-1;
        
    }
}


function change(){
    let a,b,c,d;
    a=sa;
    b=sb;
    c=da;
    d=db;
    console.log(a,b,c,d);
    let t1,t2;
    t1=Math.ceil((a+c)/2);
    t2=Math.ceil((b+d)/2);
    console.log(t1,t2);

    if((a+b)>(c+d)){
        t1=Math.floor((a+c)/2);
    t2=Math.floor((b+d)/2);
    console.log(t1,t2);
    }
    else{
        t1=Math.ceil((a+c)/2);
    t2=Math.ceil((b+d)/2);
    console.log(t1,t2);

    }
    if(matrix[a][b]==1){
        console.log("yes");
        if(matrix[c][d]==0){
            if(matrix[t1][t2]==0){
                if(t1==c && t2==d){
                  matrix[t1][t2]=1;
                  matrix[a][b]=0;
                  document.getElementById("text_box").innerHTML.text="nice move !"
                }
                else{
                    document.getElementById("text_box").innerHTML.text="invalid move !"
                    
                }

            }
            else if(matrix[t1][t2]==2){
              matrix[a][b]=0;
              matrix[t1][t2]=0;
              matrix[c][d]=1;
            }
            else{
                console.log("invalid");
            }
        }
        else{
            console.log("invalid");
        }

    }
    else if(matrix[a][b]==2){

        if(matrix[c][d]==0){
            if(matrix[t1][t2]==0){
                if(t1==c && t2==d){
                  matrix[a][b]=0;
                  matrix[c][d]=2;
                }
                else{
                    console.log("invalid");
                }

            }
            else if(matrix[t1][t2]==1){
                matrix[a][b]=0;
                matrix[c][d]=2;
                matrix[t1][t2]=0;
            }
            else{
                console.log("invalid");
            }
        }
        else{
            console.log("invalid");
        }

    }
    else{
        console.log("invalid");

    }

}
