<?php

namespace App\Entity;

use App\Repository\PlannedDayRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PlannedDayRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class PlannedDay
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="date")
     */
    private $dayDate;

    /**
     * @ORM\Column(type="integer")
     */
    private $completionLevel;

    /**
     * @ORM\OneToMany(targetEntity="Task", mappedBy="plannedDay")
     */
    private $tasks;

    public function __construct()
    {
        $this->tasks = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDayDate(): ?\DateTimeInterface
    {
        return $this->dayDate;
    }

    public function setDayDate(\DateTimeInterface $dayDate): self
    {
        $this->dayDate = $dayDate;

        return $this;
    }

    public function getCompletionLevel(): ?int
    {
        return $this->completionLevel;
    }

    public function setCompletionLevel(int $completionLevel): self
    {
        $this->completionLevel = $completionLevel;

        return $this;
    }

    /**
     * @return Collection<int, Task>
     */
    public function getTasks(): Collection
    {
        return $this->tasks;
    }

    public function addTask(Task $task): self
    {
        if (!$this->tasks->contains($task)) {
            $this->tasks[] = $task;
            $task->setPlannedDay($this);
        }

        return $this;
    }

    public function removeTask(Task $task): self
    {
        if ($this->tasks->removeElement($task)) {
            // set the owning side to null (unless already changed)
            if ($task->getPlannedDay() === $this) {
                $task->setPlannedDay(null);
            }
        }

        return $this;
    }
}
