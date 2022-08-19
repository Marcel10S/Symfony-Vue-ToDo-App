<?php

namespace App\Repository;

use App\Entity\PlannedDay;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PlannedDay>
 *
 * @method PlannedDay|null find($id, $lockMode = null, $lockVersion = null)
 * @method PlannedDay|null findOneBy(array $criteria, array $orderBy = null)
 * @method PlannedDay[]    findAll()
 * @method PlannedDay[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PlannedDayRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PlannedDay::class);
    }

    public function add(PlannedDay $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(PlannedDay $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
}
