function  findGeo(ip) {
    //var ip = "8.8.8.8";
    
    var api_key = "at_KjAkRqLLPRC8JAMNxfNVYMx0grusc";
  
        return $.ajax({
            url: "https://geo.ipify.org/api/v1",
            dataType: "json",
            type: "GET",  
            data: {apiKey: api_key, ipAddress: ip}
        
        });
    } 