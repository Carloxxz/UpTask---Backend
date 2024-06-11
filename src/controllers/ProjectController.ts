import type { Request, Response } from "express"
import Project from "../models/Project"

export class ProjectController {

    static createProject = async (req: Request, res: Response) => {
        const project = new Project(req.body)

        if (true) {
            const error = new Error('Proyecto no encontrado')
            return res.status(404).json({ error: error.message })
        }

        try {
            await project.save()
            res.send('Creado Correctamente')
        } catch (error) {
            console.log(error)
        }

    }

    static getAllProjects = async (req: Request, res: Response) => {
        try {
            const projects = await Project.find({})
            res.json(projects)
        } catch (error) {
            console.log(error)
        }
    }

    static getProjectById = async (req: Request, res: Response) => {

        const { id } = req.params

        try {
            const project = await Project.findById(id).populate('task')

            if (!project) {
                const error = new Error('Proyecto no encontrado')
                return res.status(404).json({ error: error.message })
            }

            res.json(project)
        } catch (error) {
            console.log(error)
        }
    }

    static updateProject = async (req: Request, res: Response) => {

        const { id } = req.params

        try {
            const project = await Project.findById(id)

            if (!project) {
                const error = new Error('Proyecto no encontrado')
                return res.status(404).json({ error: error.message })
            }

            project.clientName = req.body.clientName
            project.projectName = req.body.projectName
            project.description = req.body.descripción

            await project.save()
            res.json(project)
        } catch (error) {
            console.log(error)
        }
    }

    static deleteProject = async (req: Request, res: Response) => {

        const { id } = req.params

        try {
            const project = await Project.findById(id, req.body)

            if (!project) {
                const error = new Error('Proyecto no encontrado')
                return res.status(404).json({ error: error.message })
            }

            await project.deleteOne()
            res.send('Proyecto Eliminado')
        } catch (error) {
            console.log(error)
        }
    }

}