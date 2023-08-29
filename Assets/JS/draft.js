const apikey = "inN6GxbgKKSK9GyTb8KAVYsgLPcN4t9l";

            const nmaAPI ="https://data.nma.gov.au/object?title=*";

            const nmaImg ="https://data.nma.gov.au/object?limit=10&media=*&format=simple";


            async function getExhibitions() 
            {
                const objectsContainer = document.getElementById('objectsContainer')
                try 
                {
                    const response = await fetch(nmaImg);
                    const data = await response.json();

                    console.log(data); 

                    data.data.forEach(item => {
                        console.log(item);

                        const image = item.hasVersion[0].hasVersion[0].identifier;

                        console.log(image);

                        const itemContainer = document.createElement('div');

                        const title = '<h2>' + item.title + '</h2>';
                        const imageTag = '<img src="' + image + '" alt="image">';

                        itemContainer.innerHTML = title + imageTag;
                        // ListItem.textContent = item.title;

                        objectsContainer.appendChild(itemContainer);
                    })

                } catch(error) 
                {
                    console.log('error: ', error);
                }
            }
            getExhibitions()