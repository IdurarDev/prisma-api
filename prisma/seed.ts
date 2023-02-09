// factice data
import { db } from "../src/utils/db.server"

type User = {
    firstname: string,
    lastname: string,
    email: string
};

type Plant = {
    title: string,
    description: string,
    datePublished: Date
}

type Article = {
    title: string,
    description: string,
    datePublished: Date
}

type Blog = {
    title: string,
    description: string,
    datePublished: Date
}

type Comment = {
    content: string,
    datePublished: Date
}

async function seed() {
    await Promise.all(
        getUsers().map(user => {
            return db.user.create({
                data: {
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email
                }
            })
        })
    );
    const user = await db.user.findFirst({
        where: {
            firstname: "Hamid",
        }
    });

    await Promise.all(
        getPlants().map((plant) => {
            const { title, description, datePublished } = plant;
            return db.plant.create({
                data: {
                    title,
                    description,
                    datePublished,
                    userId: `${user?.id}`
                },
            });
        })
    );
}

seed();

function getUsers(): Array<User> {
    return [
        {
            firstname: "Hamid",
            lastname: "Idurar",
            email: "bob@dev.com"
        },
        {
            firstname: "Samir",
            lastname: "Idurar",
            email: "sam@dev.com"
        },
        {
            firstname: "Ammâr",
            lastname: "Idurar",
            email: "am@dev.com"
        }
    ]
}

function getPlants(): Array<Plant> {
    return [
        {
            title: "Rosiers",
            description: "Joli rosiers",
            datePublished: new Date()
        },
        {
            title: "Roses rouges",
            description: "Belle roses rouges éclatantes",
            datePublished: new Date()
        },
        {
            title: "Roses blanches ",
            description: "Superbe roses blanches magnifiques",
            datePublished: new Date()
        }
    ]
}

function getArticles(): Array<Article> {
    return [
        {
            title: "Hamid",
            description: "Idurar",
            datePublished: new Date()
        },
        {
            title: "Samir",
            description: "Idurar",
            datePublished: new Date()
        },
        {
            title: "Ammâr",
            description: "Idurar",
            datePublished: new Date()
        }
    ]
}

function getBlogs(): Array<Blog> {
    return [
        {
            title: "Hamid",
            description: "Idurar",
            datePublished: new Date()
        },
        {
            title: "Samir",
            description: "Idurar",
            datePublished: new Date()
        },
        {
            title: "Ammâr",
            description: "Idurar",
            datePublished: new Date()
        }
    ]
}

function getComments(): Array<Comment> {
    return [
        {
            content: "Idurar",
            datePublished: new Date()
        },
        {
            content: "Idurar",
            datePublished: new Date()
        },
        {
            content: "Idurar",
            datePublished: new Date()
        }
    ]
}