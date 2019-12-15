
let rule=30;
let w=501;
let h=((w-3)/2);
let kk=1;
let windth=w*kk;
let heigth=h*kk;


let i;
let j;

let A=new Array(h);
let B=new Array(h);

function aaa(){
  rule=this.value();
}

let s;
function setup() {
s = createInput(30);


}

function draw() {
  for(i=0;i<8;i++){
    B[i]=false;
  }
  createCanvas(windth,heigth);
  s.input(aaa);
  background(120,12,120,100);
  let ru=rule;
  let l=0;
  while(ru>0){
    if(ru%2==1){
      B[l]=true;
      ru--;
    }
    ru/=2;
    l++;
  }
  for(i=0;i<h;i++){
    A[i]= new Array(w);
    for(j=0;j<w;j++){
        A[i][j]=new punto(0,kk,j,i);
    }
  }

  A[0][(w-1)/2].v=1;
  j=0;
  let xx=w;
  let xxx=0;
  let conta=0;
  i=0;
  while(i<h-1){
    conta=4*(A[i][xxx].v)+2*(A[i][xxx+1].v)+(A[i][xxx+2].v);
    j=xxx+2;
    while(j<xx-1){
      if(B[conta]){
        A[i+1][j-1].v=1;
      }
      conta=conta*2;
      conta-=8*(A[i][j-2].v);
      conta+=A[i][j+1].v;
      j++;
    }
    i++;
  }
  for(i=0;i<h;i++){
    for(j=0;j<w;j++){
      A[i][j].show();
    }
  }




}
