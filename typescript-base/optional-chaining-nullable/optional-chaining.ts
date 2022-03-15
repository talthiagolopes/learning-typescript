type Address = {
    street? : string;
}

type User = {
    address?: Address;
}

function bla(): void {

    const user: User = {};

    if (user?.address?.street && user.address.street === 'My street') {
        console.log('My Street');
    }
    else {
        console.log('ELSE');
    }
}

bla();