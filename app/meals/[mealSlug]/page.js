export default function MealsPage({ params }) {
    return (
        <>
            <h1>Meal Details</h1>
            <div>{params.mealSlug}</div>
        </>
    )
}