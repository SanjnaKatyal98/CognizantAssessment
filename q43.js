var marks=[12,18,25,24,2,5,18,20,20,21];

function findMoreThanAvg(arr){
        let sum=0;
        arr.forEach(function(num) { sum += num });
        let average=sum/arr.length;
        console.log(`Average of marks: ${average}`);
        let count=0;
        for(let i=0;i<arr.length;i++){
                if(arr[i]>average)
                count++;
        }
        let percentage=(count)*100/10;
        console.log(`Percentage of Students more than average: ${percentage}%`);
}

function generateFrequency(arr){       
        let map=new Map;
        for(let j=0;j<arr.length;j++){
                let i= arr[j];
                if(map.has(i)){
                        map.set(i,map.get(i)+1);
                }
                else{
                        map.set(i,1);
                }
        }
        let rs=[];
        for(let i=0;i<25;i++){
                if(arr.includes(i)){
                        rs[i]=map.get(i);
                }
                else{
                        rs[i]=0;
                }
        }
        console.log(`Frequency of marks: [${rs}]`);
}

console.log(findMoreThanAvg(marks));
console.log( generateFrequency(marks));