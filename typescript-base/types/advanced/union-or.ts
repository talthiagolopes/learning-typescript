type CustomerName = {
    name: string;
}

type CustomerAge = {
    age: number;
}

type CustomerSayMyName = {
    sayMyName: () => void;
}

type CustomerUnion = CustomerName & CustomerAge & CustomerSayMyName;

type CustomerOr = CustomerName | CustomerAge | CustomerSayMyName;


const customerUnion: CustomerUnion = {
    name: 'Customer',
    age: 32,
    sayMyName: (() => { console.log('Say my name  (CustomerUnion)!') })
}

const customerOr: CustomerOr = {
    sayMyName: (() => { console.log('Say my name (CustomerOr)!') })
}