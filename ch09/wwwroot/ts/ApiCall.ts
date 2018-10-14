namespace ApiCall {
    function ServerGet(url: string): Promise<string>
    {
        return new Promise<string>((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.onload = () => resolve(xhr.responseText);
            xhr.onerror = () => reject(new Error(xhr.statusText));
            xhr.send();
        });
    }
    
//    ServerGet("https://localhost:44353/Home/ApiEndpoint")
//        .then(bodyText => {
//            try {
//                return JSON.parse(bodyText);
//            }
//            catch{
//                throw "wrong json returned by server: ";
//            }
            
//        })
//        .catch(error => {
//            alert("an error occurred:" + error);
//        })
//        .then((json) => alert(json))
//        .finally(() => { alert("call ended");})     
//}

    //Promise.all([
    //    ServerGet("https://localhost:44353/Home/ApiEndpoint"),
    //    ServerGet("https://localhost:44353/Home/AnotherApiEndpoint")])
    //    .then(([res1, res2]) => {
    //        try {
    //            return [
    //                JSON.parse(res1),
    //                JSON.parse(res2)];
    //        }
    //        catch{
    //            throw "wrong json returned by server: ";
    //        }
    //    })
    //    .catch(error => {
    //        alert("an error occurred:" + error);
    //    })
    //    .then(([json1, json2]) => {
    //        alert(json1);
    //        alert(json2);
    //    })
    //    .finally(() => {
    //        alert("call ended");
    //    });
//Promise.all([
//    fetch("https://localhost:44353/Home/ApiEndpoint"),
//    fetch("https://localhost:44353/Home/AnotherApiEndpoint")])
//    .then(([res1, res2]) => {
//        if (!res1.ok) throw (res1.statusText);
//        if (!res2.ok) throw (res2.statusText);
//        return Promise.all([
//            res1.json(),
//            res2.json()]);
//    })
//        .catch(error => {
//            alert("an error occurred: " + error);
//        })
//        .then(([json1, json2]) => {
//            alert(json1);
//            alert(json2);
//        })
//        .finally(() => {
//            alert("call ended");
//        });
    async function getData(): Promise<void> {
        try {
            var response =
                await fetch("https://localhost:44353/Home/ApiEndpoint");
            if (!response.ok) throw (response.statusText);
            alert(await response.json());
            response =
                await fetch("https://localhost:44353/Home/AnotherApiEndpoint");
            if (!response.ok) throw (response.statusText);
            alert(await response.json());
        }
        catch (error) {
            alert("an error occurred: " + error);
        }
        alert("call ended");
    }
    getData();
}