<?php

namespace App\Controller;

use App\Entity\PlannedDay;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ListTasksController extends AbstractController
{
    /**
     * @Route("/listTasks", name="app_list_tasks")
     */
    public function index(ManagerRegistry $doctrine): Response
    {
        $plannedDays = $doctrine->getRepository(PlannedDay::class)->getPlannedDayDisplayArray();
        return $this->render(
            'list_tasks/list_tasks.html.twig', 
            [
                'controller_name' => 'ListTasksController',
                'planned_days' => $plannedDays,
            ]
        );
    }
}
