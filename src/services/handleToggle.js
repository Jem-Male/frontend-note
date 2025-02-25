export const handleToggle = async (itemId, currentStatus) => {
    const newStatus = !currentStatus;

    try {
        const response = await fetch(`https://n0tes.pythonanywhere.com/api/v1/items/toggle_finished/${itemId}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ is_finished: newStatus }),
        });

        if (response.ok) {
            return newStatus;  // Возвращаем новый статус
        } else {
            console.error('Ошибка при обновлении статуса');
            return currentStatus;
        }
    } catch (error) {
        console.error('Произошла ошибка при запросе:', error);
        return currentStatus;
    }
};
